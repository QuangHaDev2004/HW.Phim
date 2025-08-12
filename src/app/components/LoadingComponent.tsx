export const LoadingComponent = () => {
  return (
    <>
      <div className="flex h-[80vh] items-center justify-center">
        <div className="relative flex h-[50px] w-[50px] items-center justify-center">
          <span className="absolute w-full h-full rounded-full opacity-75 bg-secondary animate-ping"></span>

          <div className="bg-secondary relative flex h-[50px] w-[50px] items-center justify-center rounded-full">
            <div className="border-dark-one border-t-primary h-[40px] w-[40px] animate-spin rounded-full border-[5px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
