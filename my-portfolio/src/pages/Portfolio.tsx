import {AppShell,Burger, Flex, Title} from "@mantine/core";;
import { Toggle } from "../components/Toggle";
import { Navbar } from "../components/NavBar";
import { useDisclosure } from "@mantine/hooks";
import { Carousels } from "../components/Carousels";

function Portfolio() {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60}}
            navbar={{
            width: 310,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
            }}
            padding="md"
        
        >  
            <AppShell.Header zIndex={300}>
                
               
            
    
                <Flex justify="space-between" align="center" p="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <div style={{ width: 100 }}></div>  
                    <Title order={2} style={{ flex: 1, textAlign: "center" }}>
                        My Portfolio
                    </Title>
                    <Toggle/>
                </Flex>
                
                
               
        
                
            </AppShell.Header>

            <AppShell.Navbar p="md" zIndex={400} withBorder={false}>
                <Navbar/>
            </AppShell.Navbar>

            <AppShell.Main>
               
                <Carousels/>
                
            </AppShell.Main>
    
        </AppShell>
        
    );
}

export default Portfolio