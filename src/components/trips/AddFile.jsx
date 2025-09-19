import React from 'react'
import { DollarSign, Plus, Upload } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import api from "@/api/axios"
import { toast } from "sonner"
import { useNavigate, useSearchParams } from "react-router-dom"

const expenseSchema = z.object({
    file: z.array(z.file().min(1, "name is required"))
    
})


const AddFile= ({ tripId }) => {

    const form = useForm({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            file: "",
           
        },
    })

    const onSubmit = async (data) => {
         console.log(data);
        try {
             const formData = new FormData();
             formData.append("files",data.file[0]);


            const response = await api.post(`/trips/${tripId}/files`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            
            });
            console.log(response)
            // if (response.data._id) {
            //     toast.success("Upload files successfully!");
            // } else {
            //     toast.error("Failed to Upload files");
            // }
        } catch (error) {
            console.error('Error adding files:', error);
            toast.error("An error occurred while adding expense");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                            <Upload className="mr-2 h-5 w-5 text-red-600" />
                            Upload a files
                        </CardTitle>
                        <CardDescription>Upload photos,tickets, file, bill and more</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">

                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field: { onChange} }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                        type="file" 
                                        multiple
                                        onChange={(e) => onChange(e.target.files ? Array.form(e.target.files) : [])}   
                                        
                                     /> 
                                         {/* it combines all the files in one array */}

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        

                        <Button type="submit" className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Upload
                        </Button>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}

export default AddFile