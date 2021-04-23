function TextContainer(props){
  const text = props.text;
  const list = props.list;
  return (
    <div className="textContainer">
    <div>{text}</div>
    </div>
  );
}

export default TextContainer;
