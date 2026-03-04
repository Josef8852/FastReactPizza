import LinkButton from "../../ui/LinkButton";

const EmptyCart : React.FC = () => {
  return (
    <div className="mt-5 py-3 px-4">
      <LinkButton route="/menu">&larr; Back to menu</LinkButton>

      <p className='mt-5'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
