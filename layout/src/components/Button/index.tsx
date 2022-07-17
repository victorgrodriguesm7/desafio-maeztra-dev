import { CustomButton, CustomButtonProps } from "./style"

type Props = React.HTMLAttributes<HTMLButtonElement> & CustomButtonProps;

export default function Button({
  size = "normal",
  weight = 400,
  borderRadius,
  ...props
}: Props) {
  return (
    <CustomButton 
      size={size} 
      weight={weight} 
      borderRadius={borderRadius}
      {...props}/>
  )
}
