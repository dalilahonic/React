import classes from './MeetupDetail.module.css';

export default function MeetupDetail({
  image,
  title,
  adress,
  description,
}) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <adress>{adress}</adress>
      <p>{description}</p>
    </section>
  );
}
