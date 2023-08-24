import React from 'react';
import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import VcGatedDapp from "./VcGatedDapp";
import { Center, Card, Image, CardBody, Container } from "@chakra-ui/react";
import University from "./components/University";

const Main = () => {

    const [provedAccessBirthday, setProvedAccessBirthday] = useState(true);

    return (
        <div>
            <University />
            {provedAccessBirthday ? (
                <VcGatedDapp />
            ) : (
                <Center className="vc-check-page">
                    <Container>
                        <Card
                            style={{
                                border: "2px solid #805AD5",
                            }}
                        >
                            <CardBody style={{ paddingBottom: 0 }}>
                                <p>
                                    This is a fullstack template for creating a Polygon ID VC{" "}
                                    <a href="https://0xpolygonid.github.io/tutorials/#core-concepts-of-polygon-id-verifiable-credentials-identity-holder-issuer-and-verifier-triangle-of-trust">
                                        (Verifiable Credential)
                                    </a>{" "}
                                    gated dapp. Prove you were born before January 1, 2023 to use
                                    the dapp
                                </p>

                                <PolygonIDVerifier
                                    publicServerURL={
                                        process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                                    }
                                    localServerURL={
                                        process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                                    }
                                    credentialType={"KYCAgeCredential"}
                                    issuerOrHowToLink={
                                        "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                                    }
                                    onVerificationResult={setProvedAccessBirthday}
                                />
                                <Image
                                    src="https://bafybeibcgo5anycve5flw6pcz5esiqkvrzlmwdr37wcqu33u63olskqkze.ipfs.nftstorage.link/"
                                    alt="Polygon devs image"
                                    borderRadius="lg"
                                />
                            </CardBody>
                            <a
                                href="https://twitter.com/0ceans404"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p
                                    style={{
                                        position: "absolute",
                                        bottom: "-15px",
                                        right: "0",
                                        fontSize: "8px",
                                    }}
                                >
                                    Template built with 💜 by Steph
                                </p>
                            </a>
                        </Card>
                    </Container>
                </Center>
            )}
        </div>
    );
};

export default Main;