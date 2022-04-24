import Container from "../UI/Container";
import Card from "../UI/Card";
import { useFormContext } from "react-hook-form";
import { useEffect, useCallback } from "react";
import { addProductsActions } from "../../store/addProductsSlice";
import { useAppDispatch } from "../../store/hooks";

interface Props {
  status: number | null;
}

const FeedbackHTTP = ({ status }: Props) => {
  const { reset } = useFormContext();
  const dispatch = useAppDispatch();

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

  return <p>{status}</p>;
};

export default FeedbackHTTP;
