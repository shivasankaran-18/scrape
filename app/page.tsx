
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

async function fn()
{
  const res=await prisma.result.findMany({where:{id:{gt:58}}})
  res.sort((a,b)=>parseInt(a.regNo.slice(4))-parseInt(b.regNo.slice(4)))
  return res
}

export default async function Component() {
  const res=await fn()
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">CSE-D Semester 2 Results</h1>
          <p className="text-lg md:text-xl">Explore the academic achievements of the CSE-D class.</p>
        </div>
      </header>
      <main className="flex-1 bg-background px-4 md:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Registration No.</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">GPA</TableHead>
                  <TableHead className="text-right">Tamil</TableHead>
                  <TableHead className="text-right">Probability and Statistics</TableHead>
                  <TableHead className="text-right">English</TableHead>
                  <TableHead className="text-right">DSUCPP</TableHead>
                  <TableHead className="text-right">DBMS</TableHead>
                  <TableHead className="text-right">Java</TableHead>
                  <TableHead className="text-right">DSD</TableHead>
                  <TableHead className="text-right">Aptitude</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {res.map((data)=>{
                  return <TableRow>
                  <TableCell className="font-medium">{data.regNo}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell className="text-right">{data.gpa}</TableCell>
                  <TableCell className="text-right">{data.Tamil}</TableCell>
                  <TableCell className="text-right">{data.ProbabiltyAndStatistics}</TableCell>
                  <TableCell className="text-right">{data.English}</TableCell>
                  <TableCell className="text-right">{data.DSUCPP}</TableCell>
                  <TableCell className="text-right">{data.DBMS}</TableCell>
                  <TableCell className="text-right">{data.Java}</TableCell>
                  <TableCell className="text-right">{data.DSD}</TableCell>
                  <TableCell className="text-right">{data.Aptitude}</TableCell>
                </TableRow>
                })}
                
                
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center text-sm">
          &copy; 2024 CSE-D Semester Results. All rights reserved.
        </div>
      </footer>
    </div>
  )
}