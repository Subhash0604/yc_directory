"use client";

import React, { use, useActionState, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import MDEditor from '@uiw/react-md-editor';
import { Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/lib/validation';
import { z } from 'zod';

import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


const StartupForm = () => {
    
    const [errors,setErrors] = useState<Record<string,string>>({});
    const [pitch, setPitch] = useState("");

    const { toast } = useToast();
     const  router = useRouter();

    const handleFormSubmit =  async (preState: any, formData:FormData) => {
        try{
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            }

            //compares the form values with the schema
            // if the values are not valid, it will throw an error
            await formSchema.parseAsync(formValues);

            console.log(formData);

            // const result = await createIdea(preState,formData,pitch);

            // if(result.success == 'SUCCESS'){
            //     toast({
            //         title:'Success',
            //         description:'Your Pitch has been Submitted Successfully'
            //     });

            //     router.push(`/startups/${result.id}`);
            // }

            // return result;

        }
        catch(error){
             if(error instanceof z.ZodError){
                const  fieldErrors = error.flatten().fieldErrors;

                setErrors(fieldErrors as unknown as Record<string, string>);
                
                toast({
                    title: 'Error',
                    description: 'Please check yout inputs and try again',
                    variant: 'destructive',
                })

                return { ...preState,error:"Validation Failed",stauts:'ERROR'};
             }
             toast({
                    title: 'Error',
                    description: 'Unexpected Error',
                    variant: 'destructive',
                });

             return{ ...preState, error:"Unexpected Error", status:"ERROR"};
        }

    };

    // <Record<string,string>></Record>
 
    const [state, formAction, isPending] = useActionState(handleFormSubmit, {error: ' ', status: 'INITIAL'});

   

  return (
    <form action={formAction} className='startup-form'>
       <div>
       <label htmlFor="title" className='startup-form_label'>Title</label>
        <Input 
        id='title' 
        name='title'
        className='startup-form_input'
        required 
        placeholder='Startup title'/>

        {errors.title && <p className='startup-form_error'>{errors.title}</p>}
       </div>


       <div>
       <label htmlFor="description" className='startup-form_label'>Description</label>
       <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />

        {errors.description && <p className='startup-form_error'>{errors.description}</p>}
       </div>


       <div>
       <label htmlFor="category" className='startup-form_label'>Category</label>
        <Input 
        id='category' 
        name='category'
        className='startup-form_input'
        required 
        placeholder='Startup category {Tech, Health, Education....}'/>

        {errors.category && <p className='startup-form_error'>{errors.category}</p>}
       </div>


       <div>
       <label htmlFor="link" className='startup-form_label'>Image Url</label>
        <Input 
        id='link' 
        name='link'
        className='startup-form_input'
        required 
        placeholder='Startup Image Url'/>

        {errors.link && <p className='startup-form_error'>{errors.link}</p>}
       </div>


       <div data-color-mode="light">
       <label htmlFor="pitch" className='startup-form_label'>Pitch</label>
       <MDEditor
        value={pitch}
        onChange={(value) => setPitch(value as string)}
        id='pitch'
        preview='edit'
        height={300}
        style={{ borderRadius:20, overflow: 'hidden'}}
        textareaProps={
            {
                placeholder: "Summarize your idea briefly and explain the issue it tackles"
            }
        }
        previewOptions={{
            disallowedElements: ["style"]
        }}
       />

        {errors.pitch && <p className='startup-form_error'>{errors.pitch}</p>}
       </div>

       <Button type='submit' className='startup-form_btn text-white'
       disabled={isPending}>
        {isPending ? "submitting..." : "Submit Your Pitch"} 
        <Send className="size-6 ml-2"/>
        </Button>
    </form>
  )
}

export default StartupForm
