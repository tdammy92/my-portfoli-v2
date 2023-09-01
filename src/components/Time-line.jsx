import React from "react";

const Item = ({ item, type }) => {
  return (
    <div className="col-span-4 w-full h-full">
      <div className="w-full h-full p-4 font-Poppins ">
        <p className="text-xl text-gray-500">{item?.company}</p>
        <p className="font-bold text-xl py-1">
          {type === "experience" ? "💼" : "🎓"} {item?.title}
        </p>
        <p className="text-md text-gray-600 py-1">
          {type === "experience" ? (
            <>
              📆 <span>{item?.from}</span> - <span>{item?.to}</span>
            </>
          ) : (
            <>
              📆 <span>{item?.to}</span>
            </>
          )}
        </p>
        <p className="text-base   text-gray-500">{item?.description}</p>
      </div>
    </div>
  );
};

const EmptySide = ({ index }) => {
  return (
    <>
      <div className="relative  col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gray-800"></div>
        <div className="absolute w-6 h-6 rounded-full z-10 bg-gray-800 text-white text-center">
          {index + 1}
        </div>
      </div>
    </>
  );
};

const RightSide = ({ item, index, type }) => {
  return (
    <>
      <div className="col-span-4 w-full h-full"></div>
      <EmptySide index={index} />
      <Item item={item} type={type} />
    </>
  );
};

const LeftSide = ({ item, index, type }) => {
  return (
    <>
      {/* first stack */}
      <Item item={item} type={type} />
      <EmptySide index={index} />
      <div className="col-span-4 w-full h-full"></div>
    </>
  );
};

function TimeLine({ data, type }) {
  return (
    <div className="max-w-6xl mx-auto w-full grid grid-cols-9">
      {data?.map((item, index) => {
        if (index % 2 === 0) {
          return <LeftSide item={item} key={index} index={index} type={type} />;
        } else {
          return (
            <RightSide item={item} key={index} index={index} type={type} />
          );
        }
      })}
    </div>
  );
}

export default TimeLine;
