import {ChangeEvent, useCallback, useMemo, useState} from 'react'
import {FileService} from "@services/file.service";


type TypeUpload = (
    onChange: (...event: any[]) => void,
    folder?: string,
    value:any
) => {
    uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
    isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder,value) => {
    const [isLoading, setIsLoading] = useState(false)


    const uploadImage = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            setIsLoading(true)
            const files = e.target.files
            if (files?.length) {
                const formData = new FormData()
                formData.append('image', files[0])
                await FileService.upload(formData, folder)
                    .then((data) => onChange(data[0].url))
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            }
        },
        [value]
    )

    return useMemo(() => ({uploadImage, isLoading}), [uploadImage, isLoading])
}
