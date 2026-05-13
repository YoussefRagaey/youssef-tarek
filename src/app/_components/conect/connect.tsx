"use client"
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation";
import { Textarea } from '@/components/ui/textarea'
import { Contacti } from '@/types/contactformi'
import Swal from 'sweetalert2'

export default function Connect() {

  const router = useRouter();
  const [isloading, setIsloading] = useState(false);
  let schema = z
    .object({
      name: z.string(),
      email: z.string().email("invalid email"),
      subject:z.string(),
      message:z.string(),
    })

  let form=useForm({
    defaultValues:{
      name:"",
      email:"",
      subject:"",
      message:""
    },resolver:zodResolver(schema),
    mode:"onTouched"
  })



  async function onSubmit(value: Contacti) {
console.log(value);
  try {
    setIsloading(true)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })

    if (res.ok) {
      // alert("Message sent successfully!")
      Swal.fire({
  title: "Message sent successfully!",
  icon: "success"
});

      form.reset()
    } else {
      // alert("Something went wrong.")
      Swal.fire({
  title: "Something went wrong.",
  icon: "error"
});
    }

  } catch (error) {
    alert("Error sending message.")
  } finally {
    setIsloading(false)
  }
}

  return <>
      <div id='contact' className="w-[90%] mx-auto flex flex-col md:flex-row pt-15 pb-50  gap-10 border-b border-white/50">
    <div className="md:w-1/2 w-full ">
      <div className="">
      <h1 className="font-inter text-7xl font-bold">LET`S CONNECT</h1>
      <p className="font-thin text-xl text-white/50 my-4">Say hello at <a className='text-white underline decoration-[rgb(210,232,121)]' href="mailto:tyoussef807@gmail.com">tyoussef807@gmail.com</a></p>
      <p className="font-thin text-xl text-white/50 my-4">For more info, here`s my <a className='text-white underline decoration-[rgb(210,232,121)]' href="https://drive.google.com/file/d/13HCiXYDdCWN_1KT1j5BcwnNI6XdhROUq/view?usp=sharing" target='_blank'>resume</a></p>
      <ul className='flex gap-5 mt-10'>
        <li><a target='_blank' href="https://www.linkedin.com/in/youssef-ragaey-036158241/" className='text-[rgb(210,232,121)] hover:text-white transition-all'><Linkedin/></a></li>
        <li><a target='_blank' href="https://github.com/YoussefRagaey" className='text-[rgb(210,232,121)] hover:text-white transition-all'><Github/></a></li>
        <li><a target='_blank' href="https://www.facebook.com/youssef.allam.7798/" className='text-[rgb(210,232,121)] hover:text-white transition-all'><Facebook/></a></li>
        <li><a target='_blank' href="https://www.instagram.com/youssef_ragaey19/?hl=ar" className='text-[rgb(210,232,121)] hover:text-white transition-all'><Instagram/></a></li>
      </ul>

      </div>
    </div>

    <div className="md:w-1/2 w-full">
 <div className='text-center'>
    <Card className="w-full sm:max-w-md mx-auto mb-4 bg-transparent text-white border-0">
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Name
                  </FieldLabel>
                  <Input
                  className='bg-white/10 border-0'
                    {...field}
                    type="text"
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Email
                  </FieldLabel>
                  <Input
                  className='bg-white/10 border-0'
                    {...field}
                    type="email"
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="subject"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Subject
                  </FieldLabel>
                  <Input
                  className='bg-white/10 border-0'
                    {...field}
                    type="text"
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Message
                  </FieldLabel>
                  <Textarea
                  className='bg-white/10 border-0'
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="form-rhf-demo" className={`rounded-full bg-[rgb(210,232,121)] text-black hover:bg-[rgb(210,232,121)] hover:text-black cursor-pointer ${isloading&&"opacity-50 cursor-not-allowed"}`} disabled={isloading}>
            {isloading? <Loader2 className="animate-spin"/>:""}Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  </div>    </div>
    </div>

  </>
}
