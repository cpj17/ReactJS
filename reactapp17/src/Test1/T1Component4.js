import React, { useState } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./TimelineDemo.css";

export default function TemplateDemo() {
  const events = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    // { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-check",
      color: "#FF9800",
    },
    // { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    { status: "Delivered", date: "", icon: "", color: "#607D8B" },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };
  const customizedContent = (item) => {
    return (
      <Card title={item.status} subTitle={item.date}>
        {item.image && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
            alt={item.name}
            width={200}
            className="shadow-1"
          />
        )}
        {/* <Button label="Read more" className="p-button-text" onClick={handleReadMoreClick}></Button> */}
        <ButtonComponent item={item} />
      </Card>
    );
  };

  return (
    <div className="card">
      <Timeline
        value={events}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
}

function ButtonComponent({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!";

  const contentToShow = isExpanded
    ? description
    : description.slice(0, 100) + "....";
  return (
    <>
      <p> {contentToShow} </p>
      <Button
        label="Read more"
        className="p-button-text"
        onClick={handleReadMoreClick}
      ></Button>
    </>
  );
}
