namespace TaskManager
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.botonEnviar = new System.Windows.Forms.Button();
            this.Ruta = new System.Windows.Forms.Label();
            this.FileDialog = new System.Windows.Forms.OpenFileDialog();
            this.AbrirButton = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.Total = new System.Windows.Forms.Label();
            this.Atendidas = new System.Windows.Forms.Label();
            this.NoAtendidas = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // botonEnviar
            // 
            this.botonEnviar.Font = new System.Drawing.Font("Open Sans", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.botonEnviar.Location = new System.Drawing.Point(230, 259);
            this.botonEnviar.Name = "botonEnviar";
            this.botonEnviar.Size = new System.Drawing.Size(75, 30);
            this.botonEnviar.TabIndex = 0;
            this.botonEnviar.Text = "Enviar";
            this.botonEnviar.UseVisualStyleBackColor = true;
            this.botonEnviar.Click += new System.EventHandler(this.botonEnviar_Click);
            // 
            // Ruta
            // 
            this.Ruta.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.Ruta.AutoSize = true;
            this.Ruta.Font = new System.Drawing.Font("Open Sans", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Ruta.Location = new System.Drawing.Point(106, 98);
            this.Ruta.Name = "Ruta";
            this.Ruta.Size = new System.Drawing.Size(203, 19);
            this.Ruta.TabIndex = 1;
            this.Ruta.Text = "Ningun archivo seleccionado";
            // 
            // FileDialog
            // 
            this.FileDialog.Filter = "Archivos de csv (*.csv)|*.csv";
            // 
            // AbrirButton
            // 
            this.AbrirButton.Font = new System.Drawing.Font("Open Sans", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AbrirButton.Location = new System.Drawing.Point(25, 96);
            this.AbrirButton.Name = "AbrirButton";
            this.AbrirButton.Size = new System.Drawing.Size(75, 28);
            this.AbrirButton.TabIndex = 2;
            this.AbrirButton.Text = "Abrir archivo";
            this.AbrirButton.UseVisualStyleBackColor = true;
            this.AbrirButton.Click += new System.EventHandler(this.AbrirButton_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Open Sans", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(134, 27);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(297, 26);
            this.label2.TabIndex = 3;
            this.label2.Text = "Seleccciona el archivo de tareas";
            // 
            // Total
            // 
            this.Total.AutoSize = true;
            this.Total.Font = new System.Drawing.Font("Open Sans", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Total.ForeColor = System.Drawing.SystemColors.MenuHighlight;
            this.Total.Location = new System.Drawing.Point(21, 149);
            this.Total.Name = "Total";
            this.Total.Size = new System.Drawing.Size(170, 22);
            this.Total.TabIndex = 4;
            this.Total.Text = "Total de peticiones: 0";
            // 
            // Atendidas
            // 
            this.Atendidas.AutoSize = true;
            this.Atendidas.Font = new System.Drawing.Font("Open Sans", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Atendidas.ForeColor = System.Drawing.Color.LimeGreen;
            this.Atendidas.Location = new System.Drawing.Point(21, 184);
            this.Atendidas.Name = "Atendidas";
            this.Atendidas.Size = new System.Drawing.Size(184, 22);
            this.Atendidas.TabIndex = 5;
            this.Atendidas.Text = "Peticiones atendidas: 0";
            // 
            // NoAtendidas
            // 
            this.NoAtendidas.AutoSize = true;
            this.NoAtendidas.Font = new System.Drawing.Font("Open Sans", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.NoAtendidas.ForeColor = System.Drawing.Color.DarkRed;
            this.NoAtendidas.Location = new System.Drawing.Point(21, 206);
            this.NoAtendidas.Name = "NoAtendidas";
            this.NoAtendidas.Size = new System.Drawing.Size(208, 22);
            this.NoAtendidas.TabIndex = 6;
            this.NoAtendidas.Text = "Peticiones no atendidas: 0";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.ClientSize = new System.Drawing.Size(693, 325);
            this.Controls.Add(this.NoAtendidas);
            this.Controls.Add(this.Atendidas);
            this.Controls.Add(this.Total);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.AbrirButton);
            this.Controls.Add(this.Ruta);
            this.Controls.Add(this.botonEnviar);
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.Text = "Task manager";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button botonEnviar;
        private System.Windows.Forms.Label Ruta;
        private System.Windows.Forms.OpenFileDialog FileDialog;
        private System.Windows.Forms.Button AbrirButton;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label Total;
        private System.Windows.Forms.Label Atendidas;
        private System.Windows.Forms.Label NoAtendidas;
    }
}

