import { useField } from 'formik';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

interface FormTextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

export const FormInput = ({ label, name, ...props }: FormInputProps) => {
    const [field, meta] = useField({ ...props, name });

    return (
        <div className="mt-2">
            <div>
                <label className="" htmlFor={props.id || name}>
                    {label}
                </label>
            </div>

            <input
                className={`mt-2 w-full max-w-xs border-2 px-4 py-3 ${
                    meta.touched && meta.error && ' border-red-700'
                }`}
                {...field}
                {...props}
            />

            {meta.touched && meta.error ? (
                <div className="text-red-700">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const TextArea = ({ label, name, ...props }: FormTextAreaProps) => {
    const [field, meta] = useField({ ...props, name });

    return (
        <div className="mt-2">
            <div>
                <label htmlFor={props.id || name}>{label}</label>
            </div>

            <textarea
                className="mt-2 w-full max-w-xs border-2 px-4 py-3"
                {...field}
                {...props}
            />

            {meta.touched && meta.error ? (
                <div className="text-red-700">{meta.error}</div>
            ) : null}
        </div>
    );
};
