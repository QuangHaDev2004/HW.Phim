import { LoadingComponent } from "@/app/components/LoadingComponent";
import { Note } from "@/app/components/note/Note";

export default function Loading() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />

          <LoadingComponent />
        </div>
      </div>
    </>
  );
}
