function TextContainer(props){
  const text = props.text;
  const title = props.title;
  return (
    <div className="textContainer">
      <h2>{title}</h2>
      <div>{text}</div>
    </div>
  );
}

export default TextContainer;
