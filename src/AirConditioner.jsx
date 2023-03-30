const product = {
  id: "AC1023",
  name: "Air Conditioner",
  price: 29600,
  specification: "1 Ton, 4 Star Rating",
  warranty: "5 Years Compressor Warranty"
};
const styleHeader = { color: "green" };

export function AirConditioner(price) {
  //console.log(props);
  //
  return (
    <div>
      <div>
        <h1 style={styleHeader}> Air Conditioner </h1>
        <p> ID : {product.id} </p>
        <p> Price : INR {price.price} </p>
        <p> Specification : {product.specification} </p>
        <p> Warranty : {product.warranty} </p>
      </div>
    </div>
  );
}
