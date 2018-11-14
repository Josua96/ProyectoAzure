using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TaskManager
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private async Task hacerPeticion(string tarea)
        {
            string page = "https://apitaskso.azurewebsites.net/api/HttpTrigger1?code=NvAazVaa73a47rHdYTa3taI3VLj1j8uMW0IgO1DiMmkPWhfza78uBw==&message=" + tarea;
            using (HttpClient client = new HttpClient())
            {
                using (HttpResponseMessage response = await client.GetAsync(page))
                using (HttpContent content = response.Content)
                {
                    string result = await content.ReadAsStringAsync();
                    if (result != null)
                    {
                        Console.WriteLine(result);
                    }
                }
            }
        }

        private void button1_Click_1(object sender, EventArgs e)
        {

            string tarea = "Hacer investigación,Lo mas pronto posible,1";
            hacerPeticion(tarea);
        }

        private void openFileDialog1_FileOk(object sender, CancelEventArgs e)
        {

        }


        private void button2_Click(object sender, EventArgs e)
        {
            if(FileDialog.ShowDialog()==DialogResult.OK)
            {
                Ruta.Text = FileDialog.FileName;
            }
            else
            {

            }
        }
    }
}
