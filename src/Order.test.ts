import Beer from "./categories/Beer";
import Water from "./categories/Water";
import Whisky from "./categories/Whisky";
import MessageDataFile from "./MessageDataFile";
import Order from "./Order";

test("should create order and calculate the total", () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Crystal", 1));

  const total = order.getTotal();

  expect(total).toBe(111);
});

test("should create order and calculate the tax", () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10)); // 10%
  order.addItem(new Whisky("Jack Daniels", 100)); // 20%
  order.addItem(new Water("Crystal", 1)); // isenta

  const taxes = order.getTaxes();

  expect(taxes).toBe(21);
});

test("should create order and print a message in portuguese", async () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10)); // 10%
  order.addItem(new Whisky("Jack Daniels", 100)); // 20%
  order.addItem(new Water("Crystal", 1)); // isenta

  const message = await order.printMessage("pt");

  expect(message).toBe(
    "O total foi de R$ 111, os impostos foram R$ 21. Obrigado pelo seu pedido!"
  );
});

test("should create order and print a message in english", async () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10)); // 10%
  order.addItem(new Whisky("Jack Daniels", 100)); // 20%
  order.addItem(new Water("Crystal", 1)); // isenta

  const message = await order.printMessage("en");

  expect(message).toBe(
    "The total was R$ 111, the taxes was R$ 21. Thank for your order!"
  );
});
