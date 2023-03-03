import Header from "../../components/Header";
import HeaderText from "../../components/HeaderText";
import TransparentButton from "../../components/TransparentButton";


const ChangeUnits = () => {
    return (
        <>
        <Header>
            <TransparentButton 
                icon={'arrow-left'}
            />
            <HeaderText>Change Units</HeaderText>
        </Header>
        
        </>
    )
}

export default ChangeUnits;