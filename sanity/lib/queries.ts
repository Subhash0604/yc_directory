export const STARTUP_QUERY = 
`*[_type == 'startup' &&  defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc)
  {
    _id,
    title,
    slug,
    category,
    views,
    description,
    author -> {
      _id,name,slug,image,bio
    },
    image
  }`;


export const STARTUP_QUERY_BY_ID = (`*[_type == "startup" && _id == $id][0]{

  _id,
  title,
  slug,
  _createdAt,
   author-> {
       _id, name, username, image, bio
   },
    views,
    description,
    category,
    image,
    pitch
  
}`);