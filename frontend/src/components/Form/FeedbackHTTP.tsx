import { useFormContext } from "react-hook-form";
import { useEffect, useCallback } from "react";
import { addProductsActions } from "../../store/addProductsSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  status: number | null;
}

const FeedbackHTTP = ({ status }: Props) => {
  const { reset } = useFormContext();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetAddProducts = useCallback(() => {
    reset();
    dispatch(addProductsActions.reset());
  }, [reset, dispatch]);

  useEffect(() => {
    if (status !== 200) {
      resetAddProducts();
    }
  }, [resetAddProducts, status]);

  if (!status) {
    return <div>ERR</div>;
  }

  return (
    <div className="col-span-2 grid grid-cols-1 gap-4">
      <p>Product successfully added.</p>
      <div className="w-full grid grid-cols-1 gap-4">
        <Button onClick={resetAddProducts}>Add More</Button>
        <Button
          onClick={() => {
            resetAddProducts();
            navigate("/");
          }}
        >
          Go To Shop
        </Button>
      </div>
    </div>
  );
};

export default FeedbackHTTP;
