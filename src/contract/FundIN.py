
from pyteal import *
from beaker import *


class FundIN(Application):

  name = ApplicationStateValue(stack_type=TealType.bytes, default=Bytes(""))
  imageURL = ApplicationStateValue(stack_type=TealType.bytes, default=Bytes(""))
  description = ApplicationStateValue(stack_type=TealType.bytes, default=Bytes(""))
  date = ApplicationStateValue(stack_type=TealType.uint64, default=Int(0))
  amountNeeded = ApplicationStateValue(stack_type=TealType.uint64, default=Int(0))
  amountRaised = ApplicationStateValue(stack_type=TealType.uint64, default=Int(0))


  @create
  def create(
    self,
    name: abi.String,
    imageURL: abi.String,
    description: abi.String,
    amountNeeded: abi.Uint64, 

  ):
    return Seq(
      
      Assert(name.get() != Bytes("")),
      Assert(imageURL.get() != Bytes("")),
      Assert(description.get() != Bytes("")),
      Assert(amountNeeded.get() > Int(0)),
      Assert(Txn.note() == Bytes("FundINFUndIN: uv1")),

      self.name.set(name.get()),
      self.imageURL.set(imageURL.get()),
      self.description.set(description.get()),
      self.date.set(self.date.get() + Global.latest_timestamp()),
      self.amountNeeded.set(amountNeeded.get()),

    )

  @external
  def donate(
    self,
    paymentTxn: abi.PaymentTransaction
  ):
    return Seq(

      Assert(self.amountNeeded < self.amountRaised),
      Assert(paymentTxn.get().amount() > Int(0)),
      Assert(paymentTxn.get().receiver() == self.address),

      self.amountRaised.set(self.amountRaised.get() + paymentTxn.get().amount()),

      
    )

  @external(authorize=Authorize.only(Global.creator_address()))
  def editApplication(
    self,
    name: abi.String,
    imageURL: abi.String,
    description: abi.String,
    amountNeeded: abi.Uint64,
    amountRaised: abi.Uint64, 

  ):
    return Seq(

      self.name.set(name.get()),
      self.imageURL.set(imageURL.get()),
      self.description.set(description.get()),
      self.amountNeeded.set(amountNeeded.get()),
      self.amountRaised.set(amountRaised.get())
    )

FundIN().dump()