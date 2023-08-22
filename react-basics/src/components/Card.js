import './Card.css';

// making a reusable wrapper component.

function Card(props) {
  //   console.log(props);
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

//proprs.children is a special prop built into react which every component recives. the value of this prop will be the content between opening and closing tags of this component. so whatever is inside this component will be avaivable on props.chidlren. this property allows us to make a wrapper component.
// this allows us to extract some code duplication from css files.

export default Card;
