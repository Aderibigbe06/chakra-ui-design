
/*import { Provider } from "@/components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html> 
    <div>
      {/* "Who we are" Section */
    //   {<div
    //     style={{ position: "relative", width: "70%", marginBottom: "-20px", cursor: "pointer" }}
    //     onClick={handleWhoWeAreClick}
        
    //   >
    //     <img src="/images/rectangle1.png" alt="Rectangle 1" style={{ width: "50%" }} />
    //     <div
    //       style={{ position: "absolute", top: "45%", right: "60%", transform: "translateY(-50%)", color: "black", fontWeight: "bold", fontSize: "15px", }}>
    //       Who we are
    //     </div>
    //   </div>}

    //   {/* "What we do" Section */}
    //   <div
    //     style={{ position: "relative", top: "-100px", left: "2%", width: "50%", marginBottom: "20px", cursor: "pointer", }}
    //     onClick={handleWhatWeDoClick} 
        
    //     >
    //     <img src="/images/rectangle2.png" alt="Rectangle 2" style={{ width: "30%" }} />
    //     <div
    //       style={{ position: "absolute", top: "45%", left: "15%", transform: "translateY(-50%)", color: "white", fontWeight: "bold", fontSize: "13px", }}>
    //       What we do
    //     </div>
    //   </div>

    //   {/* Display Images Based on Active Section */}
    //   <div style={{ marginTop: "40px", textAlign: "center" }}>
    //     {activeSection === "whatWeDo" ? (
    //       <>
    //         <img src="/images/practical.png" alt="Practical" style={{ width: "300px" }} />
    //         <img src="/images/tutorials.png" alt="Tutorials" style={{ width: "300px" }} />
    //       </>
    //     ) : (
    //       <>
    //       <img src="/images/frame5.png" alt="Frame 5" style={{ width: "300px" }} />
    //       <img src="/images/frame6.png" alt="Frame 6" style={{ width: "300px" }} />
    //       </>
    //      )} 
    //   </div>
    // </div>
  
   

// src/app/layout.tsx

import { Provider } from "@/components/ui/provider"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
} 
