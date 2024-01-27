import { 
    WhyDrinkWaterContainer, 
    WhyDrinkWaterTitle, 
    InfoList, 
    InfoItem 
} from "./WhyDrinkWater.styled"

export const WhyDrinkWater = () => {
  return (
    <>
    <WhyDrinkWaterContainer>
        <WhyDrinkWaterTitle>Why drink water</WhyDrinkWaterTitle>
            <InfoList>
                <InfoItem>Supply of nutrients to all organs</InfoItem>
                <InfoItem>Providing oxygen to the lungs</InfoItem>
                <InfoItem>Maintaining the work of the heart</InfoItem>
                <InfoItem>Release of processed substances</InfoItem>
                <InfoItem>Ensuring the stability of the internal environment</InfoItem>
                <InfoItem>Maintaining within the normal temperature</InfoItem>
                <InfoItem>Maintaining an immune system capable of resisting disease</InfoItem>
            </InfoList>
    </WhyDrinkWaterContainer>
    </>
  )
}