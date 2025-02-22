import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { title } from "process";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query: string }>
}) {
  const query = (await searchParams).query;
  const posts = [{ 
    _createdAt: new Date(),
    views: 55,
    author:{_id:1, name:"Subhash"},
    _id:1,
    description: "Desc",
    image: "https://images.unsplash.com/photo-1739382120576-b1434e8bc4d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    category: "Tech",
    title: "Uprisng tech"
     
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,
          <br />Connect with Enterpreneurs
        </h1>
        <p className="sub-heading !max-w--3xl">Submit Ideas,Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
            posts.map((post : StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No startups Found</p>
          )}
        </ul>
      </section>

    </>
  );
}
