import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";

interface Props {
  children: React.ReactNode;
  selector?: string;
}
export default function Modal({ children, selector = "modal-root" }: Props) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(selector);
    setMounted(true);
  }, [selector]);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return mounted ? createPortal(children, ref.current!) : null;
}

interface ModalOverlayProps {
  children: React.ReactNode;
}
export const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-white z-40 grid place-content-center place-items-center">
      {children}
    </div>
  );
};
