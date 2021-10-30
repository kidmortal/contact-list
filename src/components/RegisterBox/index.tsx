import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button``;

const Label = styled.span``;

export function RegisterBox() {
  function FormInput({ label }: { label: string }) {
    return (
      <InputContainer>
        <Label>{label}</Label>
        <Input />
      </InputContainer>
    );
  }

  return (
    <Container>
      <FormInput label="Nome" />
      <FormInput label="Nome" />
      <FormInput label="Nome" />
      <SubmitButton>Subitimar</SubmitButton>
    </Container>
  );
}
