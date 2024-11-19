// import React, { useState, useRef } from 'react'
import React, { useRef } from 'react'

export const PulsaBotones: React.FC = () => {

    // tener en cuenta que no queremos mostrar el valor del resultado en el jsx, si si, lo mas optimo seria el useState

    // const [cont, setCont] = useState<number>(0);
    //por el uso asincorno de setCont, devuelve el VALOR ANTERIOR: 0, 1, 2 y NO 1, 2, 3.

    const cont = useRef(0)

    const handleClick = (incrementa: boolean) => {
        if(incrementa) {
            // setCont(cont + 1)
            cont.current++
        } else {
            // setCont(cont - 1)
            cont.current--
        }

        // console.log(`Contador: ${cont}`)
        console.log(`Contador: ${cont.current}`)
    }

    console.log('Render!!!')
    
    // Render!!!
    // PulsaBotonUseRef.tsx?t=1731958969537:24 Render!!!
    // PulsaBotonUseRef.tsx?t=1731958969537:22 Contador: 0

    return(
        <div className='grid__productos'>
            <div>
                <button
                    onClick={
                        () => handleClick(false)
                    }
                >
                    <img 
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADqklEQVR4nO2dS29NURTHf0nRSoWpqgTBF0BHiEbKVA2Q1COompC0SNXQTHUkTfo1vDogfAAilXpMTDDxCH0aIbntkp2siDSuXD2Pvc4565f8Jzf33uz17+k+e62z9r7gOI7jOI7jOI7jNEwT0AH0AiPAXeAV8BaYBX6qZvW1V/qem/qZXfodzl/YCAwA48A3QBJqHrgP9APtVJzVwEngMbCQgrn1VAMeASeAFirEGr3SPmZobj19Ba4D6ygxK4FBYCaCwUsVxnBFx1Qq9gKvDRi8VG+ALkpAmBPHgEUDptZTGNso0ExB2Qw8NWCkNKjnwDYKRldKyzTJWWFZuJ+CcBj4bsA0WaZCMnQM45zPeE0sOSnE0IdRujU5iG2SpGj2UYwR5rUfBsyRDKaRgxhhe0FvfPIfN8itsU1u1mWRlFwTsdfZYwZMkJwUkppoabXljE9SVoh1X94mrwBeGghectbrvAtRgwaClki6lGc9edpAwBJJ0+pB5gwZCFYiK9SyMy97fjIQqETWZ30UlxmnDAQpRtSTpdGPDQQoRvQgK5PbS1Y0khSKTpm0MgwYCE6M6WIWRo8bCEyM6XbaJocWqzkDgYkxzaXdftZhICgxqp1pGn3OQEBiVGfSNHrEQEBiVDfSNPqegYCkCjfEKpZEpUFNpmn0+4QPOAeBNuwRxnRVx7jc+N6lOaAkZdGr2CdJRXIqzYEk+Yu3YZ/1CeILbRYmjN6AfdqtGJ1k6hjCPtesTB1Jb4ZDRq/sDTo2MzdDX96Rz/LOExbySVg8BSefFLw3wRwmJdfpNI32Mil1jd6RptFe+Cefwj+6tzr2v6mU/VEWuq04dmBiTBeyWtx7uwG/Ta5pjSQTHhm4iqTsDTTosQ+xA5QqtIS1RDr+QarW5Fj1JnRRXSYHWrU0KBXVdF6N6GgjtlRU/eS8WeiFgaCl7JuFAnt8+1t+jBq4yiQn3SIizbp9V0quZ8AqIrNVN6ZLiSt0WzBCZ8FPnZE6Cg9tD2CMQyUrOi0ARzBKX0mO+qlpT7hpugs+jfyweMTPv47+mS/oja+TgrEJeGLAPGlQExaO9Emyzh41nkEuajISfZ2cVrr+0oCpSxXGtJuSsUIPFbFQYp3SKlwYU2lp1SA/RDD4ix7UvZYK0QIcBx5mnOjU9EFqT9WOnv8bbbqB/Y7+GkVSc2f1uy5k2RJQdJq0n+0sMKzdQJP6UyAzf/w8yIy+NqnvGdZdrOGz/vMgjuM4juM4juM4NMgvd8bgdcflLmQAAAAASUVORK5CYII=' 
                        alt='' 
                        className='gird__productos--buttonImg'
                    />
                </button>
            </div>

    
            <div>
                <button
                    onClick={
                        () => handleClick(true)
                    }
                >
                    <img 
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2klEQVR4nO2dSY9NURDHf4mhW0xb3S1B8AUMK4QItlggMQWNDYkp7VnaGVbSia9hXBA+ABHSho0NNobQupsVkubIkSK89H3p1ufcqntf/ZLa3Lz3UvV/N+fUqVvnXHAcx3Ecx3Ecx3HGzRRgJdALXASuAU+BF8Aw8E1sWK49lc9ckO+skN9wxmA+cBy4CXwGwiTtE3ADOAb00ObMAPYAd4HvCcQtslHgDrAb6KSNmCV32puM4hbZB+AsMJcaMw3oA4YUBG626MMp8alWrAGeGRC42Z4DG6gBcUy8DPwwIGqRRd/6gQ4qykLgvgEhwzjtEbCEirEhUZoWSraYFq6nImwFvhgQLfynxcXQDoxzOHNOHEqyGMMhjLJFFgfaIoWEYm/HGHFc+2pAnJBhGNmEEZZWdOILE5ggF2uL3CFpUai5PdTOsy8bECGUZHFRo7astrziC4ktxrq2bJGnAk8MBB9KtmdlF6L6lDKAPqBL7LRcK9uPE2WJPFup1Hl6DF8aCn4MSk09OxrBBbmLm5mn5EusZWcve75VCq4IDV/eyaO4bOxVCiy08EnLn505hY4PUl1ofmlwK5fIPcpFoyI0i05ZWhmOKwYVWvil6dPRHELH5hYXmn80uJJa5NhiNeJC03yjjaRuP1upfDeHFr5p+7U8pdAHDQRUhLZf+0nIRQMBFaHt1zkSct1AQEWEOk2IFkqiRWj7NUBCXmUodWqRusT6MqVzHzOWOrVoJCybJiPVv9+FHVKVWGObhTmhu7FDj0WhUw0dDexwxuLQkXIybCjf2d3ig8nJ0NM7yknvfMFCOQsWX4JTzhK8N9F4FiZhRWj7tS+l0F4mpVDoZSmF9sI/5RT+kb3VPnSQbyL8TdxW7ELzjwZHciX63m7AH5FHpV6ShXhKgGcd5G2gQY59cKHJ3xLWqXT8Q2jhUy2bHLWa0ENBISpVqXOidpIaN6I3MpY6J1oWnUlJnFII8NtfJdbUpc6JWExzS90s9FghyNBum4Uiq337W3n0G7jLQkl2CUU6ZPtuqLk9AKajzGLZmB5qaiPAIoywruKnzoQCi1nNRoyxuYYHo2zDKIdqctTPqPSEm2ZLxYeRrxaP+Gl19M+nik5866gYC4B7BsQL47SHFo70mUye3W98BflDFiPqeXKq5foTA6I2W/RpFTVjqhwqMmhA4EGpwkWfastMCfK1gsDv5aDuObQRncAu4Hbmhc6oPEjd2W5Hz49Fl2xgvypvo5isuMPyW0dytgRUnSnSz3YAOC/dQAPyKpChv14PMiTXBuQz52UXa/yuvx7EcRzHcRzHcRyHcfITiV5ZbaaGSxIAAAAASUVORK5CYII=' 
                        alt='' 
                        className='gird__productos--buttonImg'
                    />
                </button>
            </div>
        </div>
    )
}