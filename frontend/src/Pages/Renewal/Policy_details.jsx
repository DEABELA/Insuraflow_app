import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
import NavBar from "../../components/NavBar";
import { FooterWithSocialLinks } from "../../components/Footer";
export default function PolicyDetails() {
    return (

        <div>
            <div>
                <NavBar /></div>
            <div>
                <Card className="mt-[110px] mb-[125px] ml-[100px] w-[550px] flex ">

                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Insurance policy Details
                        </Typography>
                        <Typography>
                            Please enter your Car Details
                            <div className=" flex flex-row gap-4">
                                <div className="flex mt-2 w-[350px] flex-col items-end gap-6">
                                    <Input size="md" label="Car Registration Number" />
                                    <Input size="md" label=" Phone number" />
                                </div>
                                <div className="flex mt-2 w-[350px] flex-col items-end gap-6">
                                    <Input size="md" label="Insurance Policy Number" />
                                    <Input size="md" label="Email" />
                                </div></div>

                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Next</Button>
                    </CardFooter>
                </Card></div>
            <div>
                <FooterWithSocialLinks />
            </div>
        </div>
    );
}