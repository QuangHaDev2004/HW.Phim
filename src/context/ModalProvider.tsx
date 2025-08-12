"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ModalContextType = {
  openPopup: (content: ReactNode) => void
};

// 	Tạo context để chia sẻ dữ liệu
const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: Props) => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowing]);

  const openPopup = (content: ReactNode) => {
    setIsShowing(true);
    setContent(content);
  };

  return (
    <>
      <ModalContext.Provider value={{ openPopup }}>
        {children}

        {isShowing && (
          <div className="fixed inset-0 z-[998]">
            <div
              className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
              onClick={() => setIsShowing(false)}
            >
              {content}
            </div>
          </div>
        )}
      </ModalContext.Provider>
    </>
  );
};
