import React from "react";
import { Button, Heading, List, Menu, MenuButton, MenuItem, MenuList, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

// Mock permissions data
const permissionsData = [
  { id: "ck39dv39d901", name: "Create Post" },
  { id: "ck39dv39d902", name: "Edit Post" },
  { id: "ck39dv39d903", name: "Delete Post" },
  // ...additional permissions
];

const Index = () => {
  // Placeholder for navigation function
  const navigateToNewPermission = () => {
    console.log("Navigating to newPermission page...");
    // In a real Next.js app, you would use the useRouter hook like this:
    // const router = useRouter();
    // router.push('/newPermission');
  };

  return (
    <VStack spacing={4}>
      <Heading as="h1" size="xl" mb={6}>
        Permissions
      </Heading>
      <List spacing={3}>
        {permissionsData.map((permission) => (
          <Menu key={permission.id}>
            <MenuButton as={Button} paddingY={2} width="full" textAlign="left">
              {permission.name}
            </MenuButton>
            <MenuList>
              <MenuItem command="⌘D">Delete</MenuItem>
              <MenuItem command="⌘N">Add</MenuItem>
              <MenuItem command="⌘A">Assign Permission</MenuItem>
            </MenuList>
          </Menu>
        ))}
      </List>
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={navigateToNewPermission} mr={4}>
        Add New Permission
      </Button>
      <Button colorScheme="green" onClick={() => console.log("Navigating to assign permission...")}>
        Assign Permission
      </Button>
    </VStack>
  );
};

export default Index;
