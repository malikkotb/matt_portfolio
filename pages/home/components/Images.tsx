import Picture from "./Picture";
export default function Images() {
  return (
    <div className="p-8 flex flex-col gap-28">
      <Picture src={"/aito.png"} margin="-70vh" height={"h-[50vh] max-h-[25vw]"} inputRange={[0, 0.8]} outputRange={[-12, 0]} align={""} />
      <Picture src={"/yacht.png"} margin="" height={"h-[50vh] max-h-[25vw]"} inputRange={[0, 0.8]} outputRange={[12, 0]} align={"justify-end"} />
      <Picture src={"/mini.png"} margin="" height={"h-[75vh] max-h-[80vw]"} inputRange={[0, 0.8]} outputRange={[-12, 0]} align={""} />
      <Picture src={"/opel.png"} margin="" height={"h-[20vh] max-h-[25vw]"} inputRange={[0, 0.8]} outputRange={[-12, 0]} align={"justify-end"} />
      <Picture src={"/miniJam.png"} margin="" height={"h-[50vh] max-h-[25vw]"} inputRange={[0, 0.8]} outputRange={[-12, 0]} align={""} />
    </div>
  );
}
