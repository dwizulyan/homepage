import Type from "react-typed";
export default function TexasDialogue() {
  const dialogue = [];
  const hour = getHours();
  if (hour >= 1 && hour < 12) {
    dialogue.push("Good Morning, Lian");
  } else if (hour >= 12 && hour < 20) {
    dialogue.push("Good Afternoon, Lian");
  } else {
    dialogue.push("Good Night, Lian");
  }
  dialogue.push("I'am Texas, Your assitant");
  dialogue.push("What You wanna do ?");
  console.log(dialogue);
  return (
    <div className="w-full box-dialogue px-5 bg-black  text-white py-3  gap-3">
      <p className="font-bold uppercase text-2xl">Texas</p>
      <Type
        strings={dialogue}
        typeSpeed={60}
        backDelay={1000}
        backSpeed={20}
        startDelay={2000}
        className=" py-3 font-medium"
      />
    </div>
  );
}

function getHours() {
  const date = new Date();
  return date.getHours();
}
