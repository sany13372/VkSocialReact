import {ChangeEvent, useCallback, useMemo, useState} from 'react'
import {FileService} from "@services/file.service";


type TypeUpload = (
    onChange: (...event: any[]) => void,
    value:any,
  //  folder?: string,
) => {
    uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
    isLoading: boolean
}
export const useUpload: TypeUpload = (onChange, value) => {
    const [isLoading, setIsLoading] = useState(false)


    const uploadImage = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            setIsLoading(true)
            const files = e.target.files
            if (files?.length) {
                const formData = new FormData()
                formData.append('picture', files[0])
                await FileService.upload(formData)
                    .then((data) => onChange(data.data))
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            }
        },
        [value]
    )

    return useMemo(() => ({uploadImage, isLoading}), [uploadImage, isLoading])
}
