interface FooterListItemsProps {
  title: string;
  items: Array<string>;
}

export function FooterListItems({ title, items }: FooterListItemsProps) {
  return (
    <div className="space-y-5">
      <p className="font-plus-jakarta text-xl font-medium tracking-[-2%] text-foreground">{title}</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-muted-foreground font-plus-jakarta font-normal tracking-[-2%]">{item}</li> // Use 'key' em vez de 'id' para listas no React
        ))}
      </ul>
    </div>
  );
}