---
title: FAQ
layout: PageLayout
sections:
  - colors: colors-a
    elementId: ''
    title: Need Answers?
    items:
      - question: Why should I repair with HCS?
        answer: >
          We provide a no obligation & cost effective service combined with a
          wealth of experience
      - question: What service do you offer?
        answer: >
          We collect, strip, assess and quote – **FREE OF CHARGE** and aim to
          quote within 48hours of receiving your units
      - question: Will I get a warranty?
        answer: |
          All repaired units have a 12 months warranty
      - question: Do you offer any other services?
        answer: |
          We offer statewide onsite breakdown service, cylinder repairs.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        fontWeight: '400'
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FaqSection
  - type: ContactSection
    elementId: enquiry-section
    colors: colors-f
    backgroundSize: full
    title: Send an enquiry
    text: |
      We'd love to hear from you! Please get in contact to start a
      conversation about your business requirements.
    form:
      variant: variant-a
      fields:
        - name: name
          label: Name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
          type: EmailFormControl
        - name: Number
          label: Number
          hideLabel: false
          placeholder: Your Number
          isRequired: true
          width: full
          type: TextFormControl
        - name: Description
          label: Description
          hideLabel: false
          placeholder: How can we help?
          isRequired: false
          width: full
          type: TextareaFormControl
      submitLabel: Send Message
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      type: FormBlock
    media:
      url: /images/hydraulics-repairs-perth-wa.webp
      altText: Authorised Parker distributors
      caption: Parker distributors
      type: ImageBlock
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-12
          - mb-12
          - ml-4
          - mr-4
        padding:
          - pt-8
          - pb-8
          - pl-8
          - pr-8
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderColor: border-complementary
        borderWidth: 0
        borderRadius: x-large
      title:
        textAlign: left
      text:
        textAlign: left
metaTitle: 'FAQ - Hydraulics Perth, Parker Denison Pumps Perth, Denison Pump Distributors'
metaDescription: >-
  We know you have many questions about Hydraulics, Parker Denison pumps,
  Denison pump distributors in Perth. Our FAQ can help answer any questions you
  may still have about Hydraulic Component Services. Visit us for more info
socialImage: /images/Parker.webp
---
