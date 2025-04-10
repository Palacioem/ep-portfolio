import {AppShell,Burger, Flex, Title,Box, Center, Space,Container} from "@mantine/core";;
import { Toggle } from "../components/Toggle";
import { Navbar } from "../components/NavBar";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import { HeroHeader } from "../components/HeroHeader";
import { ProjectDisplay } from "../components/ProjectsDisplay";
import {AboutMeTimeLine} from "../components/AboutMeTimeLine"
import { Header } from "../components/Header";
function Portfolio() {
    const [opened, { toggle }] = useDisclosure(false);
    const { scrollIntoView: scrollToSection1, targetRef: section1Ref } = useScrollIntoView<HTMLDivElement>({
        offset: 50, // Optional: Add an offset if you have a fixed header
      });
    
      const { scrollIntoView: scrollToSection2, targetRef: section2Ref } = useScrollIntoView<HTMLDivElement>({
        offset: 70,
      });
    
      const { scrollIntoView: scrollToSection3, targetRef: section3Ref } = useScrollIntoView<HTMLDivElement>({
        offset: 70,
      });
    return (
        <AppShell
            header={{ height: 70 }}
            navbar={{
            width: 320,
            breakpoint: 'sm',
            collapsed: { mobile: !opened, desktop:!opened},
            
            }}
            padding="lg"
        >  
            <AppShell.Header zIndex={300}>
                
               
            
                
                <Flex 
                    justify="space-between" 
                    align="center" 
                    p="md" 
                    direction='row' 
                    gap='sm'
                    
                >
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        
                        size="sm"
                    />
                    <Header
                        onClick1={scrollToSection1}
                        onClick2={scrollToSection2}
                        onClick3={scrollToSection3}
                    />
                    <Toggle/>
                    
                </Flex>
                
                
               
        
                
            </AppShell.Header>

            <AppShell.Navbar p="md" zIndex={400} withBorder={false}>
                <Navbar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Container>
                <Center >
                    <Box 
                        className="container"
                        id="section1" 
                        ref={section1Ref} 
                        style={{height:'100vh', width:'100vh',display:'flex', alignItems:'flex-start',marginBottom:250}}
                        >
                        <HeroHeader onClick={toggle}/>
                    </Box>
                </Center>
                </Container>
                
                <Center>
                    <Box id="section2" ref={section2Ref} style={{height:'100vh', width:'100vh',display:'flex', alignItems:'flex-start',scrollMarginTop:'80px',marginBottom:250} }>
                        <Flex
                            direction='column'
                            gap='xl'>
                            <Title
                                size='10vh'
                                fw={900}
                            >
                            About Me
                            </Title>
                            <Space h='md'/>
                     
                    
                            <AboutMeTimeLine/>
                    
                        </Flex>
                    </Box>
                </Center>
                
                <Box id="section3" ref={section3Ref} style={{height:'100vh', display:'flex', alignItems:'flex-start',scrollMarginTop:'80px'}}>
                    <Flex
                        direction='column'
                        gap='xl'
                        align='center'
                        >
                        <Title
                            size='10vh'
                            fw={900}
                        >
                            Projects
                        </Title>
                        <Space />
                    
                        <ProjectDisplay/>
                        
                    </Flex>
                </Box>
               
               
                
                
            </AppShell.Main>
    
        </AppShell>
        
    );
}

export default Portfolio