import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App() {
  const isOnline = false;
  return (
    <div>
      <Section title="Top">
        <PaintingList items={paintings} />
      </Section>
      <Section />

      {/* {paintings.map(painting => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))} */}

      {/* <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      /> */}
    </div>
  );
}
