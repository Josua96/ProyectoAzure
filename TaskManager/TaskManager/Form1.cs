using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TaskManager
{
    public partial class Form1 : Form
    {
        private List<string> listaTareas;
        private int peticionesAtendidas = 0;
        private int peticionesNoAtendidas = 0;
        public Form1()
        {
            InitializeComponent();
            listaTareas = new List<string>();            
        }


        private async Task HacerPeticion(string tarea)
        {
            string page = "https://apitaskso.azurewebsites.net/api/HttpTrigger1?code=NvAazVaa73a47rHdYTa3taI3VLj1j8uMW0IgO1DiMmkPWhfza78uBw==&message=" + tarea;

            using (HttpClient client = new HttpClient())
            {
                using (HttpResponseMessage response = await client.GetAsync(page))
                using (HttpContent content = response.Content)
                {
                    Console.WriteLine(content.ToString());
                    string result = await content.ReadAsStringAsync();
                    if (result != null)
                    {
                        if(result.Contains("true"))
                        {
                            peticionesAtendidas++;
                            Atendidas.Text = "Peticiones atendidas: " + peticionesAtendidas.ToString();
                        }
                        else if(result.Contains("false"))
                        {
                            peticionesNoAtendidas++;
                            Atendidas.Text = "Peticiones atendidas: " + peticionesNoAtendidas.ToString();
                        }
                        Console.WriteLine(result);
                    }
                }
            }
        }
     
   
     
        private void LeerRegistrosCSV(string ruta)
        {
            listaTareas.Clear();
            peticionesAtendidas = 0;
            peticionesNoAtendidas = 0;

            using (StreamReader sr = new StreamReader(ruta))
            {
                string currentLine;
                while ((currentLine = sr.ReadLine()) != null)
                {                                     
                    listaTareas.Add(currentLine);
                    Console.WriteLine(currentLine);
                }
            }

            Total.Text = "Total de peticiones: " + listaTareas.Count;
        }
   

        private async void  botonEnviar_Click(object sender, EventArgs e)
        {

           
            foreach (string tarea in listaTareas)
            {
                await HacerPeticion(tarea);
            }
        }

        private void AbrirButton_Click(object sender, EventArgs e)
        {          
            if (FileDialog.ShowDialog() == DialogResult.OK)
            {
                Ruta.Text = FileDialog.FileName;
                LeerRegistrosCSV(Ruta.Text);
            }            
        }
    }

    internal static class AsyncHelper
    {
        private static readonly TaskFactory _myTaskFactory = new
          TaskFactory(CancellationToken.None,
                      TaskCreationOptions.None,
                      TaskContinuationOptions.None,
                      TaskScheduler.Default);

        public static TResult RunSync<TResult>(Func<Task<TResult>> func)
        {
            return AsyncHelper._myTaskFactory
              .StartNew<Task<TResult>>(func)
              .Unwrap<TResult>()
              .GetAwaiter()
              .GetResult();
        }

        public static void RunSync(Func<Task> func)
        {
            AsyncHelper._myTaskFactory
              .StartNew<Task>(func)
              .Unwrap()
              .GetAwaiter()
              .GetResult();
        }
    }
}
