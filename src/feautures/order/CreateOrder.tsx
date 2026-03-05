import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, MainState } from "../../StoreTypes";
import { selectCart } from "../cart/cartSelectors";
import EmptyCart from "../cart/EmptyCart";
import { getTotalCartPrice } from "../cart/cartSelectors";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddressThunk } from "../user/userSlice";


const CreateOrder: React.FC = () => {
  
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  
  const dispatch = useDispatch<AppDispatch>();
    
  const { username , address , position , status , error }  = useSelector((state : MainState) => state.user);

  const [withPriority, setWithPriority] = useState<boolean>(false);
  
  
  let totalPrice: number = useSelector(getTotalCartPrice);

  
  if (withPriority) totalPrice = totalPrice + (totalPrice * 0.2);

  const cart = useSelector(selectCart);

   
  if (!cart.length) return <EmptyCart />;
  
  
  const handleLocation = (): void => {
    dispatch(fetchAddressThunk())
  }

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>
      
      <Form method="POST" action="/order/new">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input defaultValue={username} className="input grow" type="text" name="customer" required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone ? <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">{formErrors.phone}</p> : null}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow flex gap-2">
            <input className="input w-full" defaultValue={address} type="text" name="address" required />
            {!position.latitude && !position.longitude ? <Button onClick={handleLocation} type="small">Get Position</Button> : null}
          </div>
        </div>
            {status === "error" ? <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">{error}</p> : null}
        <div className="mb-12 flex gap-5 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={String(withPriority)}
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium my-5" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={`${position.latitude},${position.longitude}`} />
          <Button type ="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing Order...." : "Order now from " + String(formatCurrency(totalPrice))}
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
