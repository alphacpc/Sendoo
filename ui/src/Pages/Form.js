<div style={{maxWidth: '80%', backgroundColor:'#FFF', marginTop:40, boxShadow:'8px 8px 8px 0 #000',
paddingTop: 40}}>
        <Typography variant="h3" align="center" style={{textTransform:'uppercase'}}>Contactez-nous</Typography>

        <CardContent>
            <form>
            <Grid xs={12} sm={6} style={{margin:'20px 0'}} item>
                <TextField label="Prenom" placeholder="Entrer votre prenom" variant="outlined" fullWidth required/>
            </Grid>

            <Grid xs={12} sm={6} style={{margin:'20px 0'}} item>
                <TextField label="Nom de famille" placeholder="Entrer votre nom de famille" variant="outlined" fullWidth required/>
            </Grid>

            <Grid xs={12} sm={12} style={{margin:'20px 0'}} item>
                <TextField label="Adresse e-mail" placeholder="Entrer votre adresse e-mail" variant="outlined" fullWidth required/>
            </Grid>

            <Grid xs={12} sm={12} style={{margin:'20px 0'}} item>
                <TextField label="Votre message" multiline rows={5} placeholder="Ecrivez votre message ..." variant="outlined" fullWidth required/>
            </Grid>

            <Grid xs={12} sm={4} item>
                <Button type="submit" variant="contained" color="secondary">Envoyez</Button>
            </Grid>
            </form>
        </CardContent>
    </div>