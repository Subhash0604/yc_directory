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