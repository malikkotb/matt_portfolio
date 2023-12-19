import Picture from "./Picture";
export default function Images() {
  return (
    <div className="p-4">
      <Picture src={"/aito.png"} margin="-50vh" height={"h-[50vh] max-h-[25vw]"} inputRange={[0, 1]} outputRange={[-10, 0]} align={""} />
      <Picture src={"/yacht.png"} margin="" height={"h-[50vh] max-h-[25vw]"} inputRange={[0, 0.5]} outputRange={[10, -5]} align={"justify-end"} />
      <Picture src={"/mini.png"} margin="" height={"h-[75vh] max-h-[80vw]"} inputRange={[0, 0.25]} outputRange={[-10, 5]} align={""} />
      <Picture src={"/opel.png"} margin="" height={"h-[20vh] max-h-[25vw]"} inputRange={[0, 0.25]} outputRange={[-10, 5]} align={"justify-end"} />
      <Picture src={"/miniJam.png"} margin="" height={"h-[50vh] max-h-[25vw]"} inputRange={[0, 0.25]} outputRange={[-10, 5]} align={""} />
    </div>
  );
}
