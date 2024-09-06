import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
  } from "@chakra-ui/react";
  import { useState } from "react";

  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [telefone, setTelefone] = useState(dataEdit.telefone || "");
    const [dataEvento, setDataEvento] = useState(dataEdit.dataEvento || "");
  
    const handleSave = () => {
      if (!name || !telefone || !dataEvento) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, telefone, dataEvento };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { name, telefone,dataEvento }]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Clientes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Telefone</FormLabel>
                  <Input
                    type="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Data do Evento</FormLabel>
                  <Input
                    type="dataEvento"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;