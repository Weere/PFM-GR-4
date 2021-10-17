class Category {
  constructor(
    id,
    dateCat,
    category,
    intialAmount,
    items,
    amount,
    balance,
    totalAmount
  ) {
    this.id = id;
    this.dateCat = dateCat;
    this.category = category;
    this.intialAmount = intialAmount;
    this.items = items;
    this.amount = amount;
    this.balance = balance;
    this.totalAmount = totalAmount;
  }
}

export default Category;
