interface ListItemProps {
  url: string;
  imageUrl: string;
  alt: string;
  className?: string;
}

export function ListItem(props: ListItemProps) {
  return (
    <li>
      <a 
        target="_blank"
        href={props.url}>
        <img src={props.imageUrl} alt={props.alt} />
      </a>
    </li>
  )
}