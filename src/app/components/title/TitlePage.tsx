export const TitlePage = ({ text }: { text: string }) => {
  return (
    <>
      <h1 className="text-gradient-one mb-[16px] inline-block text-[20px] font-[900]">
        {text}
      </h1>
    </>
  );
};
