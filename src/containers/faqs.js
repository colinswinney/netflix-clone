import React from "react"
import { Accordion } from "../components"
import faqsData from "../fixtures/faqs.json"

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Fequently Asked Questions</Accordion.Title>
                <Accordion.Frame>
                {faqsData.map( (item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>
        </Accordion>
    )
}